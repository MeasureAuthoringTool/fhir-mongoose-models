const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageSignificanceCategorySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MessageSignificanceCategory' },
});

class MessageSignificanceCategory extends mongoose.Document {
  constructor(object) {
    super(object, MessageSignificanceCategorySchema);
    this._type = 'FHIR::MessageSignificanceCategory';
  }
};


module.exports.MessageSignificanceCategorySchema = MessageSignificanceCategorySchema;
module.exports.MessageSignificanceCategory = MessageSignificanceCategory;
