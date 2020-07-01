const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ObservationDataTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ObservationDataType' },
  _type: { type: String, default: 'FHIR::ObservationDataType' },
});

class ObservationDataType extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDataTypeSchema);
    this.typeName = 'ObservationDataType';
    this._type = 'FHIR::ObservationDataType';
  }
}

module.exports.ObservationDataTypeSchema = ObservationDataTypeSchema;
module.exports.ObservationDataType = ObservationDataType;
