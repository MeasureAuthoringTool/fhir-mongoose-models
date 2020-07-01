const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceNucleicAcidSubunitLinkageSchema } = require('./SubstanceNucleicAcidSubunitLinkage');
const { SubstanceNucleicAcidSubunitSugarSchema } = require('./SubstanceNucleicAcidSubunitSugar');

const SubstanceNucleicAcidSubunitSchema = BackboneElementSchemaFunction({
  subunit: PrimitiveIntegerSchema,
  sequence: PrimitiveStringSchema,
  length: PrimitiveIntegerSchema,
  sequenceAttachment: AttachmentSchema,
  fivePrime: CodeableConceptSchema,
  threePrime: CodeableConceptSchema,
  linkage: [SubstanceNucleicAcidSubunitLinkageSchema],
  sugar: [SubstanceNucleicAcidSubunitSugarSchema],
  typeName: { type: String, default: 'SubstanceNucleicAcidSubunit' },
  _type: { type: String, default: 'FHIR::SubstanceNucleicAcidSubunit' },
});

class SubstanceNucleicAcidSubunit extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSubunitSchema);
    this.typeName = 'SubstanceNucleicAcidSubunit';
    this._type = 'FHIR::SubstanceNucleicAcidSubunit';
  }
}

module.exports.SubstanceNucleicAcidSubunitSchema = SubstanceNucleicAcidSubunitSchema;
module.exports.SubstanceNucleicAcidSubunit = SubstanceNucleicAcidSubunit;
