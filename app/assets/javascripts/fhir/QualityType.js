const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const QualityTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'QualityType' },
  _type: { type: String, default: 'FHIR::QualityType' },
});

class QualityType extends mongoose.Document {
  constructor(object) {
    super(object, QualityTypeSchema);
    this.typeName = 'QualityType';
    this._type = 'FHIR::QualityType';
  }
}

module.exports.QualityTypeSchema = QualityTypeSchema;
module.exports.QualityType = QualityType;
