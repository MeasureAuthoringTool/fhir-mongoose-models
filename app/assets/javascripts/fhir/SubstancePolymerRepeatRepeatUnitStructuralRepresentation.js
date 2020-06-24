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

const SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   representation : String,
   attachment : AttachmentSchema,
   fhirTitle: { type: String, default: 'SubstancePolymerRepeatRepeatUnitStructuralRepresentation' },
});

class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends mongoose.Document {
  constructor(object) {
    super(object, SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema);
    this._type = 'FHIR::SubstancePolymerRepeatRepeatUnitStructuralRepresentation';
  }
};


module.exports.SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema = SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema;
module.exports.SubstancePolymerRepeatRepeatUnitStructuralRepresentation = SubstancePolymerRepeatRepeatUnitStructuralRepresentation;
