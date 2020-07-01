const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const TerminologyCapabilitiesExpansionParameterSchema = BackboneElementSchemaFunction({
  name: PrimitiveCodeSchema,
  documentation: PrimitiveStringSchema,
  typeName: { type: String, default: 'TerminologyCapabilitiesExpansionParameter' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilitiesExpansionParameter' },
});

class TerminologyCapabilitiesExpansionParameter extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesExpansionParameterSchema);
    this.typeName = 'TerminologyCapabilitiesExpansionParameter';
    this._type = 'FHIR::TerminologyCapabilitiesExpansionParameter';
  }
}

module.exports.TerminologyCapabilitiesExpansionParameterSchema = TerminologyCapabilitiesExpansionParameterSchema;
module.exports.TerminologyCapabilitiesExpansionParameter = TerminologyCapabilitiesExpansionParameter;
