const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SpecimenDefinitionTypeTestedSchema } = require('./SpecimenDefinitionTypeTested');

const SpecimenDefinitionSchema = DomainResourceSchemaFunction({
  identifier: IdentifierSchema,
  typeCollected: CodeableConceptSchema,
  patientPreparation: [CodeableConceptSchema],
  timeAspect: PrimitiveStringSchema,
  _collection: [CodeableConceptSchema],
  typeTested: [SpecimenDefinitionTypeTestedSchema],
  typeName: { type: String, default: 'SpecimenDefinition' },
  _type: { type: String, default: 'FHIR::SpecimenDefinition' },
});

class SpecimenDefinition extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionSchema);
    this.typeName = 'SpecimenDefinition';
    this._type = 'FHIR::SpecimenDefinition';
  }
}

module.exports.SpecimenDefinitionSchema = SpecimenDefinitionSchema;
module.exports.SpecimenDefinition = SpecimenDefinition;
