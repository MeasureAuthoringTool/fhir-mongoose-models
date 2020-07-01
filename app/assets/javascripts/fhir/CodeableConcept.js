const mongoose = require('mongoose/browser');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CodeableConceptSchema = ElementSchemaFunction({
  coding: [CodingSchema],
  text: PrimitiveStringSchema,
  typeName: { type: String, default: 'CodeableConcept' },
  _type: { type: String, default: 'FHIR::CodeableConcept' },
});

class CodeableConcept extends mongoose.Document {
  constructor(object) {
    super(object, CodeableConceptSchema);
    this.typeName = 'CodeableConcept';
    this._type = 'FHIR::CodeableConcept';
  }
}

module.exports.CodeableConceptSchema = CodeableConceptSchema;
module.exports.CodeableConcept = CodeableConcept;
