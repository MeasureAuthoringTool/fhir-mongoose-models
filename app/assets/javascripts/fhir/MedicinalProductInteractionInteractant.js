const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductInteractionInteractantSchema = BackboneElementSchemaFunction({
  itemReference: ReferenceSchema,
  itemCodeableConcept: CodeableConceptSchema,
  typeName: { type: String, default: 'MedicinalProductInteractionInteractant' },
  _type: { type: String, default: 'FHIR::MedicinalProductInteractionInteractant' },
});

class MedicinalProductInteractionInteractant extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductInteractionInteractantSchema);
    this.typeName = 'MedicinalProductInteractionInteractant';
    this._type = 'FHIR::MedicinalProductInteractionInteractant';
  }
}

module.exports.MedicinalProductInteractionInteractantSchema = MedicinalProductInteractionInteractantSchema;
module.exports.MedicinalProductInteractionInteractant = MedicinalProductInteractionInteractant;
