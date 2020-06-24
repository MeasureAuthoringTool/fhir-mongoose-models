const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { QuestionnaireResponseItemSchema } = require('./QuestionnaireResponseItem');
const { QuestionnaireResponseStatusSchema } = require('./QuestionnaireResponseStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireResponseSchema = DomainResourceSchemaFunction({
   identifier : IdentifierSchema,
   basedOn : [ReferenceSchema],
   partOf : [ReferenceSchema],
   questionnaire : String,
   status : QuestionnaireResponseStatusSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   authored : DateTime,
   author : ReferenceSchema,
   source : ReferenceSchema,
   item : [QuestionnaireResponseItemSchema],
   fhirTitle: { type: String, default: 'QuestionnaireResponse' },
});

class QuestionnaireResponse extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseSchema);
    this._type = 'FHIR::QuestionnaireResponse';
  }
};


module.exports.QuestionnaireResponseSchema = QuestionnaireResponseSchema;
module.exports.QuestionnaireResponse = QuestionnaireResponse;
