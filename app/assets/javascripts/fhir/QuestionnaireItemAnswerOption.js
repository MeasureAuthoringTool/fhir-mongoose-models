const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');
const { ReferenceSchema } = require('./Reference');

const QuestionnaireItemAnswerOptionSchema = BackboneElementSchemaFunction({
  valueInteger: PrimitiveIntegerSchema,
  valueDate: PrimitiveDateSchema,
  valueTime: PrimitiveTimeSchema,
  valueString: PrimitiveStringSchema,
  valueCoding: CodingSchema,
  valueReference: ReferenceSchema,
  initialSelected: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'QuestionnaireItemAnswerOption' },
  _type: { type: String, default: 'FHIR::QuestionnaireItemAnswerOption' },
});

class QuestionnaireItemAnswerOption extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemAnswerOptionSchema);
    this.typeName = 'QuestionnaireItemAnswerOption';
    this._type = 'FHIR::QuestionnaireItemAnswerOption';
  }
}

module.exports.QuestionnaireItemAnswerOptionSchema = QuestionnaireItemAnswerOptionSchema;
module.exports.QuestionnaireItemAnswerOption = QuestionnaireItemAnswerOption;
