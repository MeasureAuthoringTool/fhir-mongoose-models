const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstanceNucleicAcidSubunitLinkageSchema } = require('./SubstanceNucleicAcidSubunitLinkage');
const { SubstanceNucleicAcidSubunitSugarSchema } = require('./SubstanceNucleicAcidSubunitSugar');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceNucleicAcidSubunitSchema = BackboneElementSchemaFunction({
   subunit : Number,
   sequence : String,
   length : Number,
   sequenceAttachment : AttachmentSchema,
   fivePrime : CodeableConceptSchema,
   threePrime : CodeableConceptSchema,
   linkage : [SubstanceNucleicAcidSubunitLinkageSchema],
   sugar : [SubstanceNucleicAcidSubunitSugarSchema],
   fhirTitle: { type: String, default: 'SubstanceNucleicAcidSubunit' },
});

class SubstanceNucleicAcidSubunit extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceNucleicAcidSubunitSchema);
    this._type = 'FHIR::SubstanceNucleicAcidSubunit';
  }
};


module.exports.SubstanceNucleicAcidSubunitSchema = SubstanceNucleicAcidSubunitSchema;
module.exports.SubstanceNucleicAcidSubunit = SubstanceNucleicAcidSubunit;
