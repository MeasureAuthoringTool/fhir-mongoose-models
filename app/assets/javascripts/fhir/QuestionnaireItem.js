const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { EnableWhenBehaviorSchema } = require('./EnableWhenBehavior');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuestionnaireItemAnswerOptionSchema } = require('./QuestionnaireItemAnswerOption');
const { QuestionnaireItemEnableWhenSchema } = require('./QuestionnaireItemEnableWhen');
const { QuestionnaireItemInitialSchema } = require('./QuestionnaireItemInitial');
const { QuestionnaireItemTypeSchema } = require('./QuestionnaireItemType');

const QuestionnaireItemSchema = BackboneElementSchemaFunction({
  linkId: PrimitiveStringSchema,
  definition: PrimitiveUriSchema,
  code: [CodingSchema],
  prefix: PrimitiveStringSchema,
  text: PrimitiveStringSchema,
  type: QuestionnaireItemTypeSchema,
  enableWhen: [QuestionnaireItemEnableWhenSchema],
  enableBehavior: EnableWhenBehaviorSchema,
  required: PrimitiveBooleanSchema,
  repeats: PrimitiveBooleanSchema,
  readOnly: PrimitiveBooleanSchema,
  maxLength: PrimitiveIntegerSchema,
  answerValueSet: PrimitiveCanonicalSchema,
  answerOption: [QuestionnaireItemAnswerOptionSchema],
  initial: [QuestionnaireItemInitialSchema],
  item: [QuestionnaireItemSchema],
  typeName: { type: String, default: 'QuestionnaireItem' },
  _type: { type: String, default: 'FHIR::QuestionnaireItem' },
});

class QuestionnaireItem extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemSchema);
    this.typeName = 'QuestionnaireItem';
    this._type = 'FHIR::QuestionnaireItem';
  }
}

module.exports.QuestionnaireItemSchema = QuestionnaireItemSchema;
module.exports.QuestionnaireItem = QuestionnaireItem;
