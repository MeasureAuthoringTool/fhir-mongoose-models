const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeSystemConceptDesignationSchema } = require('./CodeSystemConceptDesignation');
const { CodeSystemConceptPropertySchema } = require('./CodeSystemConceptProperty');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CodeSystemConceptSchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  definition: PrimitiveStringSchema,
  designation: [CodeSystemConceptDesignationSchema],
  property: [CodeSystemConceptPropertySchema],
  concept: [CodeSystemConceptSchema],
  typeName: { type: String, default: 'CodeSystemConcept' },
  _type: { type: String, default: 'FHIR::CodeSystemConcept' },
});

class CodeSystemConcept extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemConceptSchema);
    this.typeName = 'CodeSystemConcept';
    this._type = 'FHIR::CodeSystemConcept';
  }
}

module.exports.CodeSystemConceptSchema = CodeSystemConceptSchema;
module.exports.CodeSystemConcept = CodeSystemConcept;
