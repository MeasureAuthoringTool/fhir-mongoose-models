const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { SubstancePolymerMonomerSetSchema } = require('./SubstancePolymerMonomerSet');
const { SubstancePolymerRepeatSchema } = require('./SubstancePolymerRepeat');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstancePolymerSchema = DomainResourceSchemaFunction({
   class : CodeableConceptSchema,
   geometry : CodeableConceptSchema,
   copolymerConnectivity : [CodeableConceptSchema],
   modification : [String],
   monomerSet : [SubstancePolymerMonomerSetSchema],
   repeat : [SubstancePolymerRepeatSchema],
   fhirTitle: { type: String, default: 'SubstancePolymer' },
});

class SubstancePolymer extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerSchema);
    this._type = 'FHIR::SubstancePolymer';
  }
};


module.exports.SubstancePolymerSchema = SubstancePolymerSchema;
module.exports.SubstancePolymer = SubstancePolymer;
