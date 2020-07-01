const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureMapContextTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureMapContextType' },
  _type: { type: String, default: 'FHIR::StructureMapContextType' },
});

class StructureMapContextType extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapContextTypeSchema);
    this.typeName = 'StructureMapContextType';
    this._type = 'FHIR::StructureMapContextType';
  }
}

module.exports.StructureMapContextTypeSchema = StructureMapContextTypeSchema;
module.exports.StructureMapContextType = StructureMapContextType;
