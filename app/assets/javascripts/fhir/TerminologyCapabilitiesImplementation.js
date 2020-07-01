const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');

const TerminologyCapabilitiesImplementationSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  url: PrimitiveUrlSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesImplementation' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesImplementation' },
});

class TerminologyCapabilitiesImplementation extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesImplementationSchema);
    this.typeName = 'TerminologyCapabilitiesImplementation';
    this._type = 'FHIR::TerminologyCapabilitiesImplementation';
  }
}

module.exports.TerminologyCapabilitiesImplementationSchema = TerminologyCapabilitiesImplementationSchema;
module.exports.TerminologyCapabilitiesImplementation = TerminologyCapabilitiesImplementation;
