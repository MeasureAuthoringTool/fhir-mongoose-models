const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { SubstanceSpecificationNameOfficialSchema } = require('./SubstanceSpecificationNameOfficial');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationNameSchema = BackboneElementSchemaFunction({
   name : String,
   type : CodeableConceptSchema,
   status : CodeableConceptSchema,
   preferred : Boolean,
   language : [CodeableConceptSchema],
   domain : [CodeableConceptSchema],
   jurisdiction : [CodeableConceptSchema],
   synonym : [SubstanceSpecificationNameSchema],
   translation : [SubstanceSpecificationNameSchema],
   official : [SubstanceSpecificationNameOfficialSchema],
   source : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SubstanceSpecificationName' },
});

class SubstanceSpecificationName extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationNameSchema);
    this._type = 'FHIR::SubstanceSpecificationName';
  }
};


module.exports.SubstanceSpecificationNameSchema = SubstanceSpecificationNameSchema;
module.exports.SubstanceSpecificationName = SubstanceSpecificationName;
