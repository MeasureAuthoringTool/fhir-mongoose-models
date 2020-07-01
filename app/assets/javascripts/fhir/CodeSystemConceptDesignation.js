const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CodeSystemConceptDesignationSchema = BackboneElementSchemaFunction({
  language: PrimitiveCodeSchema,
  use: CodingSchema,
  value: PrimitiveStringSchema,
  typeName: { type: String, default: 'CodeSystemConceptDesignation' },
  _type: { type: String, default: 'FHIR::CodeSystemConceptDesignation' },
});

class CodeSystemConceptDesignation extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemConceptDesignationSchema);
    this.typeName = 'CodeSystemConceptDesignation';
    this._type = 'FHIR::CodeSystemConceptDesignation';
  }
}

module.exports.CodeSystemConceptDesignationSchema = CodeSystemConceptDesignationSchema;
module.exports.CodeSystemConceptDesignation = CodeSystemConceptDesignation;
