const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { SubstanceProteinSubunitSchema } = require('./SubstanceProteinSubunit');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceProteinSchema = DomainResourceSchemaFunction({
   sequenceType : CodeableConceptSchema,
   numberOfSubunits : Number,
   disulfideLinkage : [String],
   subunit : [SubstanceProteinSubunitSchema],
   fhirTitle: { type: String, default: 'SubstanceProtein' },
});

class SubstanceProtein extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceProteinSchema);
    this._type = 'FHIR::SubstanceProtein';
  }
};


module.exports.SubstanceProteinSchema = SubstanceProteinSchema;
module.exports.SubstanceProtein = SubstanceProtein;
