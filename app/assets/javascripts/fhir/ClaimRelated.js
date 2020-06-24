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

const ClaimRelatedSchema = BackboneElementSchemaFunction({
   claim : ReferenceSchema,
   relationship : CodeableConceptSchema,
   reference : IdentifierSchema,
   fhirTitle: { type: String, default: 'ClaimRelated' },
});

class ClaimRelated extends mongoose.Document {
  constructor(object) {
    super(object, ClaimRelatedSchema);
    this._type = 'FHIR::ClaimRelated';
  }
};


module.exports.ClaimRelatedSchema = ClaimRelatedSchema;
module.exports.ClaimRelated = ClaimRelated;
