const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MessageDefinitionAllowedResponseSchema } = require('./MessageDefinitionAllowedResponse');
const { MessageDefinitionFocusSchema } = require('./MessageDefinitionFocus');
const { MessageSignificanceCategorySchema } = require('./MessageSignificanceCategory');
const { MessageheaderResponseRequestSchema } = require('./MessageheaderResponseRequest');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageDefinitionSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   replaces : [String],
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   copyright : String,
   base : String,
   parent : [String],
   eventCoding : CodingSchema,
   eventUri : String,
   category : MessageSignificanceCategorySchema,
   focus : [MessageDefinitionFocusSchema],
   responseRequired : MessageheaderResponseRequestSchema,
   allowedResponse : [MessageDefinitionAllowedResponseSchema],
   graph : [String],
   fhirTitle: { type: String, default: 'MessageDefinition' },
});

class MessageDefinition extends mongoose.Document {
  constructor(object) {
    super(object, MessageDefinitionSchema);
    this._type = 'FHIR::MessageDefinition';
  }
};


module.exports.MessageDefinitionSchema = MessageDefinitionSchema;
module.exports.MessageDefinition = MessageDefinition;
