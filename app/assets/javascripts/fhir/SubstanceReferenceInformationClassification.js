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

const SubstanceReferenceInformationClassificationSchema = BackboneElementSchemaFunction({
   domain : CodeableConceptSchema,
   classification : CodeableConceptSchema,
   subtype : [CodeableConceptSchema],
   source : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SubstanceReferenceInformationClassification' },
});

class SubstanceReferenceInformationClassification extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationClassificationSchema);
    this._type = 'FHIR::SubstanceReferenceInformationClassification';
  }
};


module.exports.SubstanceReferenceInformationClassificationSchema = SubstanceReferenceInformationClassificationSchema;
module.exports.SubstanceReferenceInformationClassification = SubstanceReferenceInformationClassification;
