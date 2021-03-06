import RestModel from 'discourse/models/rest';

export default RestModel.extend({
  room: '',
  webhook: '',
  room_id: '',

  init(){
    this._super();
    if(typeof this.get('rules') === 'undefined'){
      this.set('rules', []);
    }
  }
});
