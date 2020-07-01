const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AllergyIntoleranceCategorySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AllergyIntoleranceCategory' },
  _type: { type: String, default: 'FHIR::AllergyIntoleranceCategory' },
});

class AllergyIntoleranceCategory extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceCategorySchema);
    this.typeName = 'AllergyIntoleranceCategory';
    this._type = 'FHIR::AllergyIntoleranceCategory';
  }
}

module.exports.AllergyIntoleranceCategorySchema = AllergyIntoleranceCategorySchema;
module.exports.AllergyIntoleranceCategory = AllergyIntoleranceCategory;
