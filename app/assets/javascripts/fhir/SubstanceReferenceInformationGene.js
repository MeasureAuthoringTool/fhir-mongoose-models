const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceReferenceInformationGeneSchema = BackboneElementSchemaFunction({
   geneSequenceOrigin : CodeableConceptSchema,
   gene : CodeableConceptSchema,
   source : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SubstanceReferenceInformationGene' },
});

class SubstanceReferenceInformationGene extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationGeneSchema);
    this._type = 'FHIR::SubstanceReferenceInformationGene';
  }
};


module.exports.SubstanceReferenceInformationGeneSchema = SubstanceReferenceInformationGeneSchema;
module.exports.SubstanceReferenceInformationGene = SubstanceReferenceInformationGene;
