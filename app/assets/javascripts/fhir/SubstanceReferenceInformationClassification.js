const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const SubstanceReferenceInformationClassificationSchema = BackboneElementSchemaFunction({
  domain: CodeableConceptSchema,
  classification: CodeableConceptSchema,
  subtype: [CodeableConceptSchema],
  source: [ReferenceSchema],
  typeName: { type: String, default: 'SubstanceReferenceInformationClassification' },
  _type: { type: String, default: 'FHIR::SubstanceReferenceInformationClassification' },
});

class SubstanceReferenceInformationClassification extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationClassificationSchema);
    this.typeName = 'SubstanceReferenceInformationClassification';
    this._type = 'FHIR::SubstanceReferenceInformationClassification';
  }
}

module.exports.SubstanceReferenceInformationClassificationSchema = SubstanceReferenceInformationClassificationSchema;
module.exports.SubstanceReferenceInformationClassification = SubstanceReferenceInformationClassification;
