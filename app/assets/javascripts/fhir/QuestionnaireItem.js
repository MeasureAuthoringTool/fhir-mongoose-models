const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { EnableWhenBehaviorSchema } = require('./EnableWhenBehavior');
const { QuestionnaireItemAnswerOptionSchema } = require('./QuestionnaireItemAnswerOption');
const { QuestionnaireItemEnableWhenSchema } = require('./QuestionnaireItemEnableWhen');
const { QuestionnaireItemInitialSchema } = require('./QuestionnaireItemInitial');
const { QuestionnaireItemTypeSchema } = require('./QuestionnaireItemType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireItemSchema = BackboneElementSchemaFunction({
   linkId : String,
   definition : String,
   code : [CodingSchema],
   prefix : String,
   text : String,
   type : QuestionnaireItemTypeSchema,
   enableWhen : [QuestionnaireItemEnableWhenSchema],
   enableBehavior : EnableWhenBehaviorSchema,
   required : Boolean,
   repeats : Boolean,
   readOnly : Boolean,
   maxLength : Number,
   answerValueSet : String,
   answerOption : [QuestionnaireItemAnswerOptionSchema],
   initial : [QuestionnaireItemInitialSchema],
   item : [QuestionnaireItemSchema],
   fhirTitle: { type: String, default: 'QuestionnaireItem' },
});

class QuestionnaireItem extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemSchema);
    this._type = 'FHIR::QuestionnaireItem';
  }
};


module.exports.QuestionnaireItemSchema = QuestionnaireItemSchema;
module.exports.QuestionnaireItem = QuestionnaireItem;
