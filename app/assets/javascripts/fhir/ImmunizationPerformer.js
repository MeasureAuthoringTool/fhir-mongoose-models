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

const ImmunizationPerformerSchema = BackboneElementSchemaFunction({
   function : CodeableConceptSchema,
   actor : ReferenceSchema,
   fhirTitle: { type: String, default: 'ImmunizationPerformer' },
});

class ImmunizationPerformer extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationPerformerSchema);
    this._type = 'FHIR::ImmunizationPerformer';
  }
};


module.exports.ImmunizationPerformerSchema = ImmunizationPerformerSchema;
module.exports.ImmunizationPerformer = ImmunizationPerformer;
