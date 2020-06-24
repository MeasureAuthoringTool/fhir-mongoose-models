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

const ProcedurePerformerSchema = BackboneElementSchemaFunction({
   function : CodeableConceptSchema,
   actor : ReferenceSchema,
   onBehalfOf : ReferenceSchema,
   fhirTitle: { type: String, default: 'ProcedurePerformer' },
});

class ProcedurePerformer extends mongoose.Document {
  constructor(object) {
    super(object, ProcedurePerformerSchema);
    this._type = 'FHIR::ProcedurePerformer';
  }
};


module.exports.ProcedurePerformerSchema = ProcedurePerformerSchema;
module.exports.ProcedurePerformer = ProcedurePerformer;
