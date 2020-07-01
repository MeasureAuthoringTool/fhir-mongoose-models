const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');
const { QuantitySchema } = require('./Quantity');
const { QuestionnaireItemOperatorSchema } = require('./QuestionnaireItemOperator');
const { ReferenceSchema } = require('./Reference');

const QuestionnaireItemEnableWhenSchema = BackboneElementSchemaFunction({
  question: PrimitiveStringSchema,
  operator: QuestionnaireItemOperatorSchema,
  answerBoolean: PrimitiveBooleanSchema,
  answerDecimal: PrimitiveDecimalSchema,
  answerInteger: PrimitiveIntegerSchema,
  answerDate: PrimitiveDateSchema,
  answerDateTime: PrimitiveDateTimeSchema,
  answerTime: PrimitiveTimeSchema,
  answerString: PrimitiveStringSchema,
  answerCoding: CodingSchema,
  answerQuantity: QuantitySchema,
  answerReference: ReferenceSchema,
  typeName: { type: String, default: 'QuestionnaireItemEnableWhen' },
  _type: { type: String, default: 'FHIR::QuestionnaireItemEnableWhen' },
});

class QuestionnaireItemEnableWhen extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemEnableWhenSchema);
    this.typeName = 'QuestionnaireItemEnableWhen';
    this._type = 'FHIR::QuestionnaireItemEnableWhen';
  }
}

module.exports.QuestionnaireItemEnableWhenSchema = QuestionnaireItemEnableWhenSchema;
module.exports.QuestionnaireItemEnableWhen = QuestionnaireItemEnableWhen;
