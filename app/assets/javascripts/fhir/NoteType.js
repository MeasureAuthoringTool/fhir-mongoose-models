const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NoteTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'NoteType' },
});

class NoteType extends mongoose.Document {
  constructor(object) {
    super(object, NoteTypeSchema);
    this._type = 'FHIR::NoteType';
  }
};


module.exports.NoteTypeSchema = NoteTypeSchema;
module.exports.NoteType = NoteType;
