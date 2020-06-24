const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { SubstanceNucleicAcidSubunitSchema } = require('./SubstanceNucleicAcidSubunit');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceNucleicAcidSchema = DomainResourceSchemaFunction({
   sequenceType : CodeableConceptSchema,
   numberOfSubunits : Number,
   areaOfHybridisation : String,
   oligoNucleotideType : CodeableConceptSchema,
   subunit : [SubstanceNucleicAcidSubunitSchema],
   fhirTitle: { type: String, default: 'SubstanceNucleicAcid' },
});

class SubstanceNucleicAcid extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSchema);
    this._type = 'FHIR::SubstanceNucleicAcid';
  }
};


module.exports.SubstanceNucleicAcidSchema = SubstanceNucleicAcidSchema;
module.exports.SubstanceNucleicAcid = SubstanceNucleicAcid;
