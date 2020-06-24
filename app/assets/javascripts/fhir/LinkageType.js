const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const LinkageTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'LinkageType' },
});

class LinkageType extends mongoose.Document {
  constructor(object) {
    super(object, LinkageTypeSchema);
    this._type = 'FHIR::LinkageType';
  }
};


module.exports.LinkageTypeSchema = LinkageTypeSchema;
module.exports.LinkageType = LinkageType;
