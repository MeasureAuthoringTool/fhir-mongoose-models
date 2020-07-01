const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ProcedurePerformerSchema = BackboneElementSchemaFunction({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  typeName: { type: String, default: 'ProcedurePerformer' },
  _type: { type: String, default: 'FHIR::ProcedurePerformer' },
});

class ProcedurePerformer extends mongoose.Document {
  constructor(object) {
    super(object, ProcedurePerformerSchema);
    this.typeName = 'ProcedurePerformer';
    this._type = 'FHIR::ProcedurePerformer';
  }
}

module.exports.ProcedurePerformerSchema = ProcedurePerformerSchema;
module.exports.ProcedurePerformer = ProcedurePerformer;
