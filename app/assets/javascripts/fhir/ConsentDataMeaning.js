const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConsentDataMeaningSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConsentDataMeaning' },
  _type: { type: String, default: 'FHIR::ConsentDataMeaning' },
});

class ConsentDataMeaning extends mongoose.Document {
  constructor(object) {
    super(object, ConsentDataMeaningSchema);
    this.typeName = 'ConsentDataMeaning';
    this._type = 'FHIR::ConsentDataMeaning';
  }
}

module.exports.ConsentDataMeaningSchema = ConsentDataMeaningSchema;
module.exports.ConsentDataMeaning = ConsentDataMeaning;
