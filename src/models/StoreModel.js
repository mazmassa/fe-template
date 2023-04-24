//STYLES

//EXTERNALS
import pluralize from "pluralize";

//LOCALS
import { useAppStore } from "../store/store";
import Intl from "../i18n/i18n";

class StoreModel {
  constructor(resource, options) {
    this.resource = resource;
    this.options = options;
    this.one = resource;
    this.all = resource;

    this.isLoading = false;
    this.status = null;

    this.init();
    this._parseResource();
    this._doctor();
  }

  init() {
    if (this.options?.keyForModel) {
      let { one, all } = this.options.keyForModel;

      if (!one || !all) {
        throw new Error(
          `StoreModel::Init Options must contains "one" and "all" properties resource/model names.`
        );
      }

      if (this._isSameWordForPlurarAndSingular(one)) {
        throw new Error(
          `StoreModel::Init Option resource/model name ${one} resulted in an equal name when inferred. Please, pick another resource/model name.`
        );
      }

      this.one = one;
      this.all = all;
    } else {
      let one = pluralize.singular(this.one.split("/").shift());
      let all = pluralize(one);

      if (this._isSameWordForPlurarAndSingular(one)) {
        throw new Error(
          `StoreModel::Init Model/Resource name ${one} resulted in an equal name when inferred. Please, pick another resource/model name.`
        );
      }

      this.one = one;
      this.all = all;
    }
  }

  load(networkData) {
    let { isRoot } = this.resource;

    if (isRoot) {
      this.setAll(networkData);
      return this.get(this.all);
    } else {
      this.setOne(networkData);
      return this.get(this.one);
    }
  }

  save(data) {
    this.setOne(data);
    this.push(data);

    return this.get(this.all);
  }

  update(data) {
    let { id } = data[this.one];

    this.dropOne(id);

    return this.save(data);
  }

  setOne(data) {
    useAppStore.setState({ [this.one]: data[this.one] });

    return this.get(this.one);
  }

  setAll(data) {
    useAppStore.setState({ [this.all]: data[this.all] });

    return this.get(this.all);
  }

  get(attr) {
    return useAppStore.getState()[attr];
  }

  push(data) {
    useAppStore.setState((prevState) => ({
      [this.all]: [...prevState[this.all], data[this.one]],
    }));

    return this.get(this.all);
  }

  dropOne(id) {
    let oldAll = this.get(this.all);
    let newAll = this._dropById(oldAll, id);
    let data = { [this.all]: newAll };

    return this.setAll(data);
  }

  dropAll() {
    return this.setAll([]);
  }

  loading(message) {
    let status = message ?? Intl.t("store.loading");
    useAppStore.setState((prevStatus) => ({
      isLoading: !prevStatus.status,
      status: !prevStatus.isLoading ? status : null,
    }));
  }

  _dropById(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  }

  _doctor() {
    try {
      let one = this.get(this.one);
      let all = this.get(this.all);
      let isAnObject = typeof one === "object" && one !== null;
      let isAnArray = Array.isArray(all);

      if (!isAnArray || !isAnObject) {
        throw new Error();
      }
    } catch (error) {
      throw new Error(
        `StoreModel::Doctor ${error}\n Have you created the Store Model for "${this.one}" and "${this.all}" being object and array respectively"!?\nDon't forget to import it on the main Store (store.js) object.`
      );
    }
  }

  _parseResource() {
    let resource = this.resource.split("/");
    let firstElemnt = resource[0];
    let secondElement = resource[1];

    let root = firstElemnt;
    let isRoot = secondElement ? false : true;

    let hasAnId = !isRoot && !isNaN(secondElement);
    let id = hasAnId ? secondElement : null;

    this.resource = { root, id, isRoot };
  }

  _isSameWordForPlurarAndSingular(one) {
    return pluralize.isPlural(one) === pluralize.isSingular(one);
  }
}

export default StoreModel;
