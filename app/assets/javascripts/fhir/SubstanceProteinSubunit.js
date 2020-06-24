const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceProteinSubunitSchema = BackboneElementSchemaFunction({
   subunit : Number,
   sequence : String,
   length : Number,
   sequenceAttachment : AttachmentSchema,
   nTerminalModificationId : IdentifierSchema,
   nTerminalModification : String,
   cTerminalModificationId : IdentifierSchema,
   cTerminalModification : String,
   fhirTitle: { type: String, default: 'SubstanceProteinSubunit' },
});

class SubstanceProteinSubunit extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceProteinSubunitSchema);
    this._type = 'FHIR::SubstanceProteinSubunit';
  }
};


module.exports.SubstanceProteinSubunitSchema = SubstanceProteinSubunitSchema;
module.exports.SubstanceProteinSubunit = SubstanceProteinSubunit;
