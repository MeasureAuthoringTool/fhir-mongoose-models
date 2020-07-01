const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const AdverseEventSuspectEntityCausalitySchema = BackboneElementSchemaFunction({
  assessment: CodeableConceptSchema,
  productRelatedness: PrimitiveStringSchema,
  author: ReferenceSchema,
  method: CodeableConceptSchema,
  typeName: { type: String, default: 'AdverseEventSuspectEntityCausality' },
  _type: { type: String, default: 'FHIR::AdverseEventSuspectEntityCausality' },
});

class AdverseEventSuspectEntityCausality extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventSuspectEntityCausalitySchema);
    this.typeName = 'AdverseEventSuspectEntityCausality';
    this._type = 'FHIR::AdverseEventSuspectEntityCausality';
  }
}

module.exports.AdverseEventSuspectEntityCausalitySchema = AdverseEventSuspectEntityCausalitySchema;
module.exports.AdverseEventSuspectEntityCausality = AdverseEventSuspectEntityCausality;
