import RestModel from 'discourse/models/rest';
import Category from 'discourse/models/category';
import computed from "ember-addons/ember-computed-decorators";

export default RestModel.extend({
  category_id: null,
  room: '',
  filter: null,

  @computed('category_id')
  categoryName(categoryId) {
    if (categoryId)
      return Category.findById(categoryId).get('name');
    else {
      return I18n.t('gitter.choose.all_categories');
    }
  },

  @computed('filter')
  filterName(filter) {
    return I18n.t(`gitter.present.${filter}`);
  }
});
