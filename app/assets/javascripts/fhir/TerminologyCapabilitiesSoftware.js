const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const TerminologyCapabilitiesSoftwareSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesSoftware' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesSoftware' },
});

class TerminologyCapabilitiesSoftware extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesSoftwareSchema);
    this.typeName = 'TerminologyCapabilitiesSoftware';
    this._type = 'FHIR::TerminologyCapabilitiesSoftware';
  }
}

module.exports.TerminologyCapabilitiesSoftwareSchema = TerminologyCapabilitiesSoftwareSchema;
module.exports.TerminologyCapabilitiesSoftware = TerminologyCapabilitiesSoftware;
