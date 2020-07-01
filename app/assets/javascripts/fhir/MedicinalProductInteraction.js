const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { MedicinalProductInteractionInteractantSchema } = require('./MedicinalProductInteractionInteractant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductInteractionSchema = DomainResourceSchemaFunction({
  subject: [ReferenceSchema],
  description: PrimitiveStringSchema,
  interactant: [MedicinalProductInteractionInteractantSchema],
  type: CodeableConceptSchema,
  effect: CodeableConceptSchema,
  incidence: CodeableConceptSchema,
  management: CodeableConceptSchema,
  typeName: { type: String, default: 'MedicinalProductInteraction' },
  _type: { type: String, default: 'FHIR::MedicinalProductInteraction' },
});

class MedicinalProductInteraction extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductInteractionSchema);
    this.typeName = 'MedicinalProductInteraction';
    this._type = 'FHIR::MedicinalProductInteraction';
  }
}

module.exports.MedicinalProductInteractionSchema = MedicinalProductInteractionSchema;
module.exports.MedicinalProductInteraction = MedicinalProductInteraction;
