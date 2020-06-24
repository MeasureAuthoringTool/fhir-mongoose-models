const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ProcedureFocalDeviceSchema = BackboneElementSchemaFunction({
   action : CodeableConceptSchema,
   manipulated : ReferenceSchema,
   fhirTitle: { type: String, default: 'ProcedureFocalDevice' },
});

class ProcedureFocalDevice extends mongoose.Document {
  constructor(object) {
    super(object, ProcedureFocalDeviceSchema);
    this._type = 'FHIR::ProcedureFocalDevice';
  }
};


module.exports.ProcedureFocalDeviceSchema = ProcedureFocalDeviceSchema;
module.exports.ProcedureFocalDevice = ProcedureFocalDevice;
