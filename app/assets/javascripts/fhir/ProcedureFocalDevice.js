const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ProcedureFocalDeviceSchema = BackboneElementSchemaFunction({
  action: CodeableConceptSchema,
  manipulated: ReferenceSchema,
  typeName: { type: String, default: 'ProcedureFocalDevice' },
  _type: { type: String, default: 'FHIR::ProcedureFocalDevice' },
});

class ProcedureFocalDevice extends mongoose.Document {
  constructor(object) {
    super(object, ProcedureFocalDeviceSchema);
    this.typeName = 'ProcedureFocalDevice';
    this._type = 'FHIR::ProcedureFocalDevice';
  }
}

module.exports.ProcedureFocalDeviceSchema = ProcedureFocalDeviceSchema;
module.exports.ProcedureFocalDevice = ProcedureFocalDevice;
