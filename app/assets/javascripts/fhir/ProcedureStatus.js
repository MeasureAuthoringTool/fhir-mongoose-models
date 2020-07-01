const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ProcedureStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ProcedureStatus' },
  _type: { type: String, default: 'FHIR::ProcedureStatus' },
});

class ProcedureStatus extends mongoose.Document {
  constructor(object) {
    super(object, ProcedureStatusSchema);
    this.typeName = 'ProcedureStatus';
    this._type = 'FHIR::ProcedureStatus';
  }
}

module.exports.ProcedureStatusSchema = ProcedureStatusSchema;
module.exports.ProcedureStatus = ProcedureStatus;
