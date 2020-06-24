const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationStructureRepresentationSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   representation : String,
   attachment : AttachmentSchema,
   fhirTitle: { type: String, default: 'SubstanceSpecificationStructureRepresentation' },
});

class SubstanceSpecificationStructureRepresentation extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureRepresentationSchema);
    this._type = 'FHIR::SubstanceSpecificationStructureRepresentation';
  }
};


module.exports.SubstanceSpecificationStructureRepresentationSchema = SubstanceSpecificationStructureRepresentationSchema;
module.exports.SubstanceSpecificationStructureRepresentation = SubstanceSpecificationStructureRepresentation;
