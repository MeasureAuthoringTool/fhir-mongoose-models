const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuestionnaireResponseItemAnswerSchema } = require('./QuestionnaireResponseItemAnswer');

const QuestionnaireResponseItemSchema = BackboneElementSchemaFunction({
  linkId: PrimitiveStringSchema,
  definition: PrimitiveUriSchema,
  text: PrimitiveStringSchema,
  answer: [QuestionnaireResponseItemAnswerSchema],
  item: [QuestionnaireResponseItemSchema],
  typeName: { type: String, default: 'QuestionnaireResponseItem' },
  _type: { type: String, default: 'FHIR::QuestionnaireResponseItem' },
});

class QuestionnaireResponseItem extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseItemSchema);
    this.typeName = 'QuestionnaireResponseItem';
    this._type = 'FHIR::QuestionnaireResponseItem';
  }
}

module.exports.QuestionnaireResponseItemSchema = QuestionnaireResponseItemSchema;
module.exports.QuestionnaireResponseItem = QuestionnaireResponseItem;
