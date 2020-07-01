const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceNucleicAcidSubunitSchema } = require('./SubstanceNucleicAcidSubunit');

const SubstanceNucleicAcidSchema = DomainResourceSchemaFunction({
  sequenceType: CodeableConceptSchema,
  numberOfSubunits: PrimitiveIntegerSchema,
  areaOfHybridisation: PrimitiveStringSchema,
  oligoNucleotideType: CodeableConceptSchema,
  subunit: [SubstanceNucleicAcidSubunitSchema],
  typeName: { type: String, default: 'SubstanceNucleicAcid' },
  _type: { type: String, default: 'FHIR::SubstanceNucleicAcid' },
});

class SubstanceNucleicAcid extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSchema);
    this.typeName = 'SubstanceNucleicAcid';
    this._type = 'FHIR::SubstanceNucleicAcid';
  }
}

module.exports.SubstanceNucleicAcidSchema = SubstanceNucleicAcidSchema;
module.exports.SubstanceNucleicAcid = SubstanceNucleicAcid;
