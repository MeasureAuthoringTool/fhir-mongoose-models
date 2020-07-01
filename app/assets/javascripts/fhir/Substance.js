const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { FHIRSubstanceStatusSchema } = require('./FHIRSubstanceStatus');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceIngredientSchema } = require('./SubstanceIngredient');
const { SubstanceInstanceSchema } = require('./SubstanceInstance');

const SubstanceSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: FHIRSubstanceStatusSchema,
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  instance: [SubstanceInstanceSchema],
  ingredient: [SubstanceIngredientSchema],
  typeName: { type: String, default: 'Substance' },
  _type: { type: String, default: 'FHIR::Substance' },
});

class Substance extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSchema);
    this.typeName = 'Substance';
    this._type = 'FHIR::Substance';
  }
}

module.exports.SubstanceSchema = SubstanceSchema;
module.exports.Substance = Substance;
