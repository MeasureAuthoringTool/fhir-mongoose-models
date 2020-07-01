const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ValueSetComposeIncludeConceptDesignationSchema = BackboneElementSchemaFunction({
  language: PrimitiveCodeSchema,
  use: CodingSchema,
  value: PrimitiveStringSchema,
  typeName: { type: String, default: 'ValueSetComposeIncludeConceptDesignation' },
  _type: { type: String, default: 'FHIR::ValueSetComposeIncludeConceptDesignation' },
});

class ValueSetComposeIncludeConceptDesignation extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeConceptDesignationSchema);
    this.typeName = 'ValueSetComposeIncludeConceptDesignation';
    this._type = 'FHIR::ValueSetComposeIncludeConceptDesignation';
  }
}

module.exports.ValueSetComposeIncludeConceptDesignationSchema = ValueSetComposeIncludeConceptDesignationSchema;
module.exports.ValueSetComposeIncludeConceptDesignation = ValueSetComposeIncludeConceptDesignation;
