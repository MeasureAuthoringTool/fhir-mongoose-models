const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceReferenceInformationGeneElementSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   element : IdentifierSchema,
   source : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SubstanceReferenceInformationGeneElement' },
});

class SubstanceReferenceInformationGeneElement extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationGeneElementSchema);
    this._type = 'FHIR::SubstanceReferenceInformationGeneElement';
  }
};


module.exports.SubstanceReferenceInformationGeneElementSchema = SubstanceReferenceInformationGeneElementSchema;
module.exports.SubstanceReferenceInformationGeneElement = SubstanceReferenceInformationGeneElement;
