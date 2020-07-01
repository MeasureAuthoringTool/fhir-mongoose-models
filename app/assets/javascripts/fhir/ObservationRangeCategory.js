const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ObservationRangeCategorySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ObservationRangeCategory' },
  _type: { type: String, default: 'FHIR::ObservationRangeCategory' },
});

class ObservationRangeCategory extends mongoose.Document {
  constructor(object) {
    super(object, ObservationRangeCategorySchema);
    this.typeName = 'ObservationRangeCategory';
    this._type = 'FHIR::ObservationRangeCategory';
  }
}

module.exports.ObservationRangeCategorySchema = ObservationRangeCategorySchema;
module.exports.ObservationRangeCategory = ObservationRangeCategory;
