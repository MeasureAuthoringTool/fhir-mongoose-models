const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { SubstanceReferenceInformationClassificationSchema } = require('./SubstanceReferenceInformationClassification');
const { SubstanceReferenceInformationGeneElementSchema } = require('./SubstanceReferenceInformationGeneElement');
const { SubstanceReferenceInformationGeneSchema } = require('./SubstanceReferenceInformationGene');
const { SubstanceReferenceInformationTargetSchema } = require('./SubstanceReferenceInformationTarget');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceReferenceInformationSchema = DomainResourceSchemaFunction({
   comment : String,
   gene : [SubstanceReferenceInformationGeneSchema],
   geneElement : [SubstanceReferenceInformationGeneElementSchema],
   classification : [SubstanceReferenceInformationClassificationSchema],
   target : [SubstanceReferenceInformationTargetSchema],
   fhirTitle: { type: String, default: 'SubstanceReferenceInformation' },
});

class SubstanceReferenceInformation extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationSchema);
    this._type = 'FHIR::SubstanceReferenceInformation';
  }
};


module.exports.SubstanceReferenceInformationSchema = SubstanceReferenceInformationSchema;
module.exports.SubstanceReferenceInformation = SubstanceReferenceInformation;
